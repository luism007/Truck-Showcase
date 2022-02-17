import {React, useEffect, useState} from 'react';
import CrossComponentCommunicationService from '../../services/CrossComponentCommunicationService';
import "./TruckShowcaseStyles.css";
const TruckShowcase = (props) => {

    const [truck, setTruck] = useState({
        truckManufacturer: 'Toyota',
        truckName: 'Tacoma',
        truckTrim: 'TRD Off-Road Pro'
    });

    let subscription$;

    useEffect(() => {

        subscription$ = CrossComponentCommunicationService
        .getTruckSubject()
        .subscribe((t) => {
            setTruck({...t});
        })

        return () => {
            subscription$.unsubscribe();
        }

    }, []);



    const prev = () => { 
        const searchIndex = getSearchIndex(props.trucks, truck, true);
        const newTruck = props.trucks[searchIndex];
        const currentShowcase = document.getElementById('currentShowcase');
        
        if(currentShowcase.classList.contains('previous')) { 
            console.log('Got it!');
            currentShowcase.classList.remove('previous');
            //currentShowcase.classList.add('previous');
            console.log('Gone', currentShowcase.classList.contains('previous'));
        } 
            currentShowcase.classList.add('previous');
       
        

        if(currentShowcase.classList.contains('next')) { 
            currentShowcase.classList.remove('next');
        }
        
        CrossComponentCommunicationService.updateTruckSubject(newTruck);
    }

    const next = () => {
        const searchIndex = getSearchIndex(props.trucks, truck, false);
        const newTruck = props.trucks[searchIndex];
        const currentShowcase = document.getElementById('currentShowcase');
        

        currentShowcase.classList.add('next');
        
        if(currentShowcase.classList.contains('previous')) { 
            currentShowcase.classList.remove('previous');
        }

        

        CrossComponentCommunicationService.updateTruckSubject(newTruck);
    }

    const getSearchIndex = (array, truck, isPrev) => {
        const index = array.findIndex((t) => t.truckName === truck.truckName);
        const searchIndex = (isPrev) ? findProperPrevIndex(index, array) : findProperNextIndex(index, array);
        return searchIndex;
    }

    const findProperNextIndex = (index, array) => {
        let properIndex;

        if(index > array.length || index >= array.length - 1) { 
            properIndex = 0;
        } else { 
            properIndex = index + 1;
        }

        return properIndex;
    }

    const findProperPrevIndex = (index, array) => {
        let properIndex;

        if(index > array.length) { 
            properIndex = 0;
        } else if (index < 0 || index === 0){
            properIndex = array.length - 1;
        } else { 
            properIndex = index - 1;
        }

        return properIndex;
    }

    return( 
        <div className='showcaseContainer' id = "currentShowcase">
            <div className='prevButtonContainer'>
                <button onClick = { prev }> Prev </button>
            </div>
            <div className='truckContainer'>
                <div className='truckDisplay'>

                </div>
                <table className='truckTable'>
                    <td>
                        <tr> Manufacturer </tr>
                        <tr> Model </tr>
                        <tr> Trim </tr>
                    </td>
                    <td>
                        <tr> {truck.truckManufacturer} </tr>
                        <tr> {truck.truckName} </tr>
                        <tr> {truck.truckTrim} </tr>
                    </td>
                </table>
            </div>
            <div className='nextButtonContainer'>
                <button onClick = { next }> Next </button>
            </div>
        </div>
    );

}

export default TruckShowcase;
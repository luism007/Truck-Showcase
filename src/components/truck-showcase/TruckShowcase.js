import {React, useEffect, useState} from 'react';
import CrossComponentCommunicationService from '../../services/CrossComponentCommunicationService';
import "./TruckShowcaseStyles.css";
const TruckShowcase = (props) => {

    const [truck, setTruck] = useState({
        manufacturer: 'Toyota',
        name: 'Tacoma',
        trim: 'TRD Off-Road Pro'
    });

    const imagesUrl = '../../../assets/images/';

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
        const index = array.findIndex((t) => t.name === truck.name);
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

    const getImage = (truck) => {

        if(!truck) {
            return;
        }

        const name = truck.name;
        
        switch(name) { 
            case 'Tacoma':
                return imagesUrl + '2022-toyota-tacoma-trd-pro.jpeg';
            case 'Colorado': 
                return imagesUrl + 'chevrolet-colorado-zr2.jpeg';
            case 'Ranger':
                return imagesUrl + 'ford-ranger-tremor.jpeg';
            case 'Frontier':
                return imagesUrl + 'nissan-frontier-pro4x.jpeg';
            case 'Gladiator':
                return imagesUrl + 'jeep-gladiator.jpeg';
            default:
                return imagesUrl + '2022-toyota-tacoma-trd-pro.jpeg';
        }

    }

    return (
      <div className="showcaseContainer" id="currentShowcase">
        <div className="prevButtonContainer">
          <button onClick={prev}> Prev </button>
        </div>
        <div className="truckContainer">
          <div className="truckDisplay">
            <img
              alt={truck.name}
              src={getImage(truck)}
              className="truckCardImg"
            ></img>
          </div>
          <table className="truckTable">
            <tbody>
              <tr>
                <td> Manufacturer </td>
                <td> Model </td>
                <td> Trim </td>
              </tr>
              <tr>
                <td> {truck.manufacturer} </td>
                <td> {truck.name} </td>
                <td> {truck.trim} </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="nextButtonContainer">
          <button onClick={next}> Next </button>
        </div>
      </div>
    );

}

export default TruckShowcase;
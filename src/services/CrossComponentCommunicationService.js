import { Subject } from  'rxjs';
const truckSubject$ = new Subject(); 

const CrossComponentCommunicationService = { 
    updateTruckSubject: (truck) => {
        truckSubject$.next(truck);
    }, 

    getTruckSubject: () => {
        return truckSubject$.asObservable();
    }
};

export default CrossComponentCommunicationService;
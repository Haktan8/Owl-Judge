import { db } from '../index';
import { collection, addDoc} from 'firebase/firestore';




export async function createEvent(title, startDate, startTime, endDate, endTime) {
    const docRef = await addDoc(collection(db, "Events"), {
        Title: title,
        StartDate: startDate,
        StartTime: startTime,
        EndDate: endDate,
        EndTime: endTime
      });
      console.log("Document written with ID: ", docRef.id);
}
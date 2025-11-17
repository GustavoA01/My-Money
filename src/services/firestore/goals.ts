import { GoalType } from "@/data/types"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../firebaseConfig"

const goalCollectionName = "goalsList"

const goalCollectionRef = collection(db, goalCollectionName)

export const createGoal = async (data: Omit<GoalType, "id">) => {
  try {
    await addDoc(goalCollectionRef, data)
  } catch (error) {
    console.error("Error creating goal:", error)
  }
}

export const getGoals = async () => {
  const goals = (await getDocs(goalCollectionRef)).docs.map((doc)=> {
    return {
      ...doc.data(),
      id:doc.id
    }
  })

  return goals as GoalType[]
}
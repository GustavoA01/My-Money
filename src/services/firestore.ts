import { addDoc, collection, getDocs, query, QueryConstraint, where } from "firebase/firestore"
import { db } from "./firebaseConfig"
import { ExpenseType } from "@/data/types"

const listCollectionRef = collection(db, "expensesList")

export const addExpense = async (data: Omit<ExpenseType, "id">) => {
  try {
    await addDoc(listCollectionRef, data)
  } catch (error) {
    console.error("Ocorreu um erro ao adicionar despesa: ", error)
  }
}

export const getExpenses = async (filter: number | undefined): Promise<ExpenseType[]> => {
  const queryConstraints: QueryConstraint[] = []

  if(filter !== undefined){
    queryConstraints.push(where("category","==",filter))
  }

  const categoryQuery = query(listCollectionRef,...queryConstraints)
  
  const docs = await getDocs(categoryQuery)
  const expenses = docs.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id
    }
  }) as ExpenseType[] 
  
  return expenses
}

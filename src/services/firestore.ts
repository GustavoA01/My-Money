import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  QueryConstraint,
  updateDoc,
  where,
} from "firebase/firestore"
import { db } from "./firebaseConfig"
import { ExpenseType } from "@/data/types"

const collectionName = "expensesList"
const listCollectionRef = collection(db, collectionName)

export const addExpense = async (data: Omit<ExpenseType, "id">) => {
  try {
    await addDoc(listCollectionRef, data)
  } catch (error) {
    console.error("Ocorreu um erro ao adicionar despesa: ", error)
  }
}

export const getExpenses = async (
  queryOptions: {
    categoryFilter?: number | undefined
    maxLimit?: number
    orderByFilter?: string | undefined
  } = {}
): Promise<ExpenseType[]> => {
  const { categoryFilter, maxLimit, orderByFilter } = queryOptions
  const queryConstraints: QueryConstraint[] = []

  if (categoryFilter !== undefined) {
    queryConstraints.push(where("category", "==", categoryFilter))
  }

  if (maxLimit) {
    queryConstraints.push(limit(maxLimit))
  }

  if(orderByFilter){
    switch(orderByFilter){
      case "recent":
        queryConstraints.push(orderBy("date", "desc"))
        break;
      case "old":
        queryConstraints.push(orderBy("date", "asc"))
        break;
      case "high":
        queryConstraints.push(orderBy("value", "desc"))
        break;
      case "low":
        queryConstraints.push(orderBy("value", "asc"))
        break;
    }
  }

  const queries = query(listCollectionRef, ...queryConstraints)

  const docs = await getDocs(queries)
  const expenses = docs.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    }
  }) as ExpenseType[]

  return expenses
}

export const getExpenseById = async (id: string): Promise<ExpenseType> => {
  const docRef = doc(db, collectionName, id)
  const snapShot = await getDoc(docRef)

  const expense = {
    ...snapShot.data(),
    id: snapShot.id,
  } as ExpenseType

  return expense
}

export const editExpense = async (
  id: string,
  data: Omit<ExpenseType, "id">
) => {
  try {
    const docRef = doc(db, collectionName, id)
    await updateDoc(docRef, { ...data })
  } catch (error) {
    console.error("Ocorreu um erro ao editar a despesa", error)
  }
}

export const deleteExpense = async (id: string) => {
  try {
    await deleteDoc(doc(db, collectionName, id))
  } catch (error) {
    console.error("Ocorreu um erro ao deletar a despesa: ", error)
    throw new Error()
  }
}

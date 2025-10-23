import { ReceiptCard } from "../../components/ReceiptsCard"

export default async function Page() {

  return (
    <div>
      <h1>Minhas Despesas</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 mt-4 space-y-4 ">
          <ReceiptCard
            title={"teste"}
            value={115}
            category={"categoria"}
            date={"254/85545"}
          />
      </div>
    </div>
  )
}

import type { NextPage } from "next"
import Head from "next/head"
import { CandyMachineView } from "../views"

const CandyMachine: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Gari vNFT</title>
        <meta name="description" content="Basic Functionality" />
      </Head>
      <CandyMachineView />
    </div>
  )
}

export default CandyMachine

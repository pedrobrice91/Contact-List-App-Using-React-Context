import { Context } from "../store/context";
import { useEffect, useContext, useState } from "react";
import Contactlist from "../componets/Contactlist";

function Home() {
  const state = useContext(Context)
  return (
    <div>
        <Contactlist/>
    </div>
  );
}

export default Home;

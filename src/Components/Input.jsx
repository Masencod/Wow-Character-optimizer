import { useState } from "react";

const Input = ({ onSubmit }) => {
    const [realm, setRealm] = useState("");
    const [region, setRegion] = useState("eu");
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {region: region, realm: realm, name: name};
        onSubmit(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 justify-center md:flex-row">
            <select onChange={({target}) => setRegion(target.value)} name="" id="" className="w-16 self-center rounded-md p-2">
                <option value="eu">EU</option>
                <option value="us">US</option>
            </select>
            <input placeholder="Enter your realm" value={realm} onChange={({target}) => setRealm(target.value.trim().toLowerCase())} type="text" className=" rounded-md p-2"/>
            <input placeholder="Enter Your name" value={name} onChange={({target}) => setName(target.value.trim().toLowerCase())} type="text" className=" rounded-md p-2"/>
            <input type="submit" className=" rounded-md p-2 cursor-pointer bg-slate-500 hover:bg-lime-900 transition-all ease-in-out duration-300"/>
        </form>
    </div>
  )
}

export default Input
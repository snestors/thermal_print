import { Button, Card, TextInput } from "flowbite-react";
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import ListNavesComponents from "./components/listNaves";

function Naves() {

    const [search, setSearch] = useState('')
    console.log(search)
  return (
    <Card className="flex flex-col m-2">
      {/* Barra superior */}
      <div className="flex justify-between mb-3">
        {/* Campo de búsqueda */}
        <div className="flex items-center">
          <TextInput type="text" placeholder="Buscar" icon={IoSearch} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        {/* Botón de agregar */}
        <Button>
          <IoMdAdd size={20} /> Agregar
        </Button>
       
      </div>

      {/* Tabla */}
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
           <ListNavesComponents></ListNavesComponents>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Naves;

import Image from "next/image";
import { formatearDinero } from "../helpers";
import useQuisco from "../hooks/useQuisco";

const Producto = ({ producto }) => {
  const { handleSetProducto, handleChangeModal } = useQuisco();
  const { nombre, imagen, precio } = producto;
  return (
    <div className="border p-3">
      <Image
        width={300}
        height={300}
        src={`/assets/img/${imagen}.jpg`}
        alt={`iamgen Platillo ${nombre}`}
      />
      <h3 className="text-2xl font-bold">{nombre}</h3>
      <p className="mt-5 font-black text-4xl text-amber-500">
        {formatearDinero(precio)}
      </p>

      <button
        type="button"
        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full 
      mt-5 p-3 uppercase font-bold"
        onClick={() => {
          handleChangeModal(), handleSetProducto(producto);
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default Producto;

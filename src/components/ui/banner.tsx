import Button from "./button";

export default function Banner() {
  return (
    <div className="xl:w-9/12 lg:w-screen md:w-screen h-96 border p-4 bg-emerald-500">
      <div className="flex flex-col max-w-72 gap-4">
        <strong>OFERTAS IRRESISTIBLES</strong>
        <p className="text-4xl font-bold">Hasta un 50% de descuento*</p>
        <p className="text-sm font-normal">
          Este verano luce tu mejor look, al mejor precio
        </p>
        <div className="flex flex-row gap-4">
          <Button text={"Mujer"} />
          <Button text={"Hombre"} />
          <Button text={"Niño/a"} />
        </div>
        <p className="text-[0.8em] font-normal">
          * Ofertas disponibles hasta el 31 de agosto a las 19:00
          &#x28;CEST&#x29;. El descuento se aplica automáticamente al finalizar
          la compra. Consulta términos y condiciones.
        </p>
      </div>
    </div>
  );
}

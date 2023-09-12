import { shipPosters } from "../shipsPoster";

export default function ShipCard({
  ship,
  index,
  showShipItem,
  openModal,
  setModalShipImg,
}) {
  return (
    <div className="ship__card">
      <div className="ship__img">
        <img className="ship__image" src={shipPosters[index]} alt="" />
      </div>
      <div
        className="ship__title"
        onClick={() => {
          showShipItem(ship);
          openModal();
          setModalShipImg(shipPosters[index]);
        }}
      >
        {ship.name}
      </div>
    </div>
  );
}

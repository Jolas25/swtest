import CharactersInFilms from "../filmPage/charactersInFilms";
import PersonFilms from "../personPage/personFilms";
export default function ModalShip({ isOpen, onClose, shipItem, modalShipImg }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Закрыть модальное окно только если кликнуто на фоновом слое
    }
  };

  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal__ship">
          <h2 className="modal__title">{shipItem.name}</h2>
          <div className="modal__img">
            <img src={modalShipImg} alt="" />
          </div>

          <div className="modal__info">
            <p>Model: {shipItem.model}</p>
            <p>Starship class : {shipItem.starship_class}</p>
            <p>Time of building: {shipItem.consumables}</p>
            <p>Cost: {shipItem.cost_in_credits}</p>
            <p>Crew: {shipItem.crew}</p>
            <p>Hyperdrive rating: {shipItem.hyperdrive_rating}</p>
            <p>Length: {shipItem.length}</p>
            <p>Passengers: {shipItem.passengers}</p>
            <p>Manufacturer: {shipItem.manufacturer}</p>
            <p>Max atmosphering speed : {shipItem.max_atmosphering_speed}</p>
            <PersonFilms arrUrls={shipItem.films} />
            <CharactersInFilms arrUrls={shipItem.pilots} />
          </div>
        </div>
      </div>
    </div>
  );
}

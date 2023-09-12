import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import ShipCard from "../components/shipsPage/shipCard";
import ModalShip from "../components/shipsPage/modalShip";

export default function Starships() {
  const { ships, count } = useLoaderData();
  const [isOpen, setIsOpen] = useState(false);
  const [shipItem, setShipItem] = useState(null);
  const [modalShipImg, setModalShipImg] = useState(null);

  if (isOpen) {
    document.body.classList.add("body-scroll-lock");
  } else {
    document.body.classList.remove("body-scroll-lock");
  }

  const navigation = useNavigation();
  useEffect(() => {
    console.log(`shipItem изменился на: `, shipItem);
    console.log(`modalShipImg изменился на: `, modalShipImg);
  }, [shipItem, modalShipImg]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showShipItem = (item) => {
    setShipItem(item);
  };

  return (
    <>
      {navigation.state === "loading" ? (
        <div className="loader">
          Loading <div class="custom-loader"></div>
        </div>
      ) : (
        <>
          <div className="ship__cards">
            {ships.map((ship, index) => (
              <ShipCard
                key={ship.name}
                ship={ship}
                index={index}
                showShipItem={showShipItem}
                openModal={openModal}
                setModalShipImg={setModalShipImg}
              />
            ))}
          </div>
          <ModalShip
            isOpen={isOpen}
            onClose={closeModal}
            shipItem={shipItem}
            modalShipImg={modalShipImg}
          ></ModalShip>
        </>
      )}
    </>
  );
}

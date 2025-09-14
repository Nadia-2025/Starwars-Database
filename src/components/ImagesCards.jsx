const ImagesCards = ({ uid, type }) => {
  const images = {
    characters: [
      { uid: 1, image: "/characters/luke-skywalker.jpg" },
      { uid: 2, image: "/characters/c-3po.jpg" },
      { uid: 3, image: "/characters/r2-d2.jpg" },
      { uid: 4, image: "/characters/darth-vader.jpg" },
      { uid: 5, image: "/characters/leia-organa.jpg" },
      { uid: 6, image: "/characters/owen-lars.jpg" },
      { uid: 7, image: "/characters/beru-whitesun.jpg" },
      { uid: 8, image: "/characters/r5-d4.jpg" },
      { uid: 9, image: "/characters/biggs-darklighter.jpg" },
      { uid: 10, image: "/characters/obi-wan-kenobi.jpg" },
    ],
    planets: [
      { uid: 1, image: "/planets/tatooine.jpg" },
      { uid: 2, image: "/planets/alderaan.jpg" },
      { uid: 3, image: "/planets/yavin-iv.jpg" },
      { uid: 4, image: "/planets/hoth.jpeg" },
      { uid: 5, image: "/planets/dagobah.jpg" },
      { uid: 6, image: "/planets/bespin.jpg" },
      { uid: 7, image: "/planets/endor.jpg" },
      { uid: 8, image: "/planets/naboo.jpg" },
      { uid: 9, image: "/planets/coruscant.jpeg" },
      { uid: 10, image: "/planets/kamino.jpg" },
    ],
    vehicles: [
      { uid: 1, image: "/vehicles/Sand-Crawler.jpeg" },
      { uid: 2, image: "/vehicles/x-34 landspeeder.jpg" },
      { uid: 3, image: "/vehicles/t-16 skyhopper.jpg" },
      { uid: 4, image: "/vehicles/starfighter.jpg" },
      { uid: 5, image: "/vehicles/Snowspeeder.jpg" },
      { uid: 6, image: "/vehicles/at-at.jpg" },
      { uid: 7, image: "/vehicles/tie-bomber.jpg" },
      { uid: 8, image: "/vehicles/at-st.jpg" },
      { uid: 9, image: "/vehicles/storm-iv.jpg" },
      { uid: 10, image: "/vehicles/sail-barge.png" },
    ],
  };

  const category = images[type];
  const item = category.find((element) => element.uid == uid);

  if (!item) return <p>Imagen no encontrada</p>;

  return <img src={item.image} className="card-img-top" alt="" />;
};

export default ImagesCards;

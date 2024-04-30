/* eslint-disable react/no-unescaped-entities */
import { sweetData } from "../data/sweetData";

import Sweet from "./Sweet";

export default function Menu() {
  const sweets = sweetData;
  const numSweets = sweets.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numSweets > 0 ? (
        <>
          <p>
            Authentic French pâtisserie. The 6 finest French sweets. Exquisite
            French pastries. Indulge in these artisanal delights. Handcrafted
            with care, all irresistibly delectable.
          </p>

          <ul className="sweets">
            {sweetData.map((sweet) => (
              <Sweet sweetObj={sweet} key={sweet.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

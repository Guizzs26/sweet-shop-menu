/* eslint-disable react/prop-types */
export default function Sweet({ sweetObj }) {
  return (
    <li className={`sweet ${sweetObj.soldOut ? "sold-out" : ""}`}>
      <img src={sweetObj.photoName} alt={sweetObj.name} />
      <div>
        <h3>{sweetObj.name}</h3>
        <p>{sweetObj.ingredients}</p>
        <span>{sweetObj.soldOut ? "SOLD OUT" : `${sweetObj.price}$`}</span>
      </div>
    </li>
  );
}

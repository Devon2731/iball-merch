// import merchList from '../../data/merch.js';

type merch = {
  title: string;
  amount: string;
  currencyCode: string;
};

const MerchCard = ({ merch }: { merch: merch }) => {
  return (
    <div>
      <h3>{merch.title}</h3>
      <p>{merch.amount}</p>
      <p>{merch.currencyCode}</p>
    </div>
  );
};

export default MerchCard;

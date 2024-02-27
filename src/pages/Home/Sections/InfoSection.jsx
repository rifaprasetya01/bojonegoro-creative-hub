/* eslint-disable react/prop-types */

import {Fragment} from 'react';

function InfoSection() {
  return (
    <section className="info-section section-full">
      <main className="body-info">
        {infoDatas.map((data, index) => {
          return (
            <Fragment key={index}>
              <CardInfo amount={data.amount} label={data.label} />
            </Fragment>
          );
        })}
      </main>
      <h1 className="update-time text-lg">- Update: Februari 25, 2024 -</h1>
    </section>
  );
}

export default InfoSection;

const CardInfo = ({amount, label}) => {
  return (
    <div className="card-info">
      <div className="body-card">
        <h1 className="amount-card heading-1 text-4xl">{amount}</h1>
        <h2 className="label-card subheading">{label}</h2>
      </div>
    </div>
  );
};

const infoDatas = [
  {
    amount: '3,765',
    label: 'Events',
  },
  {
    amount: '2,765',
    label: 'Creative Economic Performers',
  },
  {
    amount: '365',
    label: 'Collaborators',
  },
  {
    amount: '277,402 ++',
    label: 'Benefits Recipient',
  },
];

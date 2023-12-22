

const PriceCard = ({ title, price, features }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Price: ${price}</p>
          <ul className="list-group">
            {features.map((feature, index) => (
              <li key={index} className="list-group-item">
                {feature}
              </li>
            ))}
          </ul>
          <a href="#" className="btn btn-primary mt-3 align-self-center">
            Subscribe
          </a>
        </div>
      </div>
    </div>
  );
};

const PriceCardList = () => {
  const subscriptionPlans = [
    {
      title: 'Basic Plan',
      price: 9.99,
      features: ['Single User', 'Mobile, Tv', 'HD'],
    },
    {
      title: 'Standard Plan',
      price: 19.99,
      features: ['Two Users', 'Mobile, Tv, Tablet', '1080p'],
    },
    {
      title: 'Premium Plan',
      price: 29.99,
      features: ['5 Users', 'All Devices', '4K', 'No ADs'],
    },
  ];

  return (
    <div className="container mt-4">
      <div className="card border-primary rounded" style={{ backgroundColor: '#87CEEB' }}>
        <div className="card-body p-4">
          <div className="row justify-content-center">
            {subscriptionPlans.map((plan, index) => (
              <PriceCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCardList;

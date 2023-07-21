import { Alert } from '../Alert';
import { PersonScore } from '../chapt05/PersonScore';

const PersonScorePage = () => {
  return (
    <div className="container">
      <Alert heading="Success">Everything is really good!</Alert>
      <div style={{ marginTop: '20px' }}>
        <PersonScore />
      </div>
    </div>
  );
};

export default PersonScorePage;

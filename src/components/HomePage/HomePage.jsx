import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.container}>
      <ContactPhoneIcon
        sx={{
          color: 'hsla(225, 43%, 40%, 0.306)',
          fontSize: '480px',
        }}
      />
    </div>
  );
};

export default HomePage;

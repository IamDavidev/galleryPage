import HeaderPage from './sections/headerPage';
import About from './sections/About';
import LatestPhoto from './sections/LastestPhotos';
import Gallery from './sections/Gallery';
import FormSection from './sections/Form';
function App() {
	return (
		<div className='App'>
			<HeaderPage />
			<About />
			<LatestPhoto />
			<Gallery />
			<FormSection />
		</div>
	);
}

export default App;

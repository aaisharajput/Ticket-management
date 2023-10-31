
import Footer from '../../Footer';
import About from '../About';
import Intro from '../Introduction';
import Feature from '../Features';

export default function Index() {

	return (
		<>
			<Intro/>
			<div className="container-fluid p-5">
				<About/>
				<Feature/>
			</div>
			<Footer />
		</>
	)
}


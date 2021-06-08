import style from './styles.module.css';
import Button from './components/Button';
import Container from './components/Container';

function App() {
	return (
		<Container>
			<h1 className={style.header}>Hello world</h1>
			<p className={style.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laudantium nesciunt minus vitae, debitis
				obcaecati incidunt iusto adipisci placeat illum.
			</p>
			<p className={style.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laudantium nesciunt minus vitae, debitis
				obcaecati incidunt iusto adipisci placeat illum.
			</p>
			<Button color="gray" />
			<Button value="Download nu" />
			<Button />
			<Button />
			<Button color="blue" />
			<Button />
			<Button />
			<Button />
		</Container>
	);
}

export default App;

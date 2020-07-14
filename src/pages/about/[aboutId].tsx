import { useRouter } from 'next/router';
function About() {
	const router = useRouter();
	const { aboutId } = router.query;
	console.log(aboutId,router)
	return (
		<div>
			about{aboutId}
		</div>
	)
}
export default About
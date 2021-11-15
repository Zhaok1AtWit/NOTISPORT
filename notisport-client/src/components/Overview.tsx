import { Fragment } from "react";

export default function Overview() {
	return (
		<div style={{ display: 'flex', width: '100%', height: '100%', position: 'absolute' }}>
			<div style={{ width: '33%', display: 'flex', flexDirection: 'column' }}>
			<div style={{ border: 'solid 2px', flexGrow: 1, margin: '0.5rem', display: 'flex', flexDirection: 'row', justifyContent:'space-evenly' }}>
					<div>Logo</div>
					<div>Team</div>
				</div>
				<div style={{ border: 'solid 2px', flexGrow: 5, margin: '0.5rem' }}>
					Description
				</div>
			</div>
			<div style={{ width: '33%', display: 'flex', flexDirection: 'column' }}>
				<div style={{ border: 'solid 2px', flexGrow: 1, margin: '0.5rem', padding: '0.25rem' }}>
					<Widget name={'Live / Upcoming Games'}>
						<LiveGameEntry teamA='LAR' teamARecord='7-2' teamB='SF' teamBRecord='3-5' time='8:15PM' />
						<LiveGameEntry teamA='BOS' teamARecord='6-7' teamB='CLE' teamBRecord='9-5' time='7:00PM' />
					</Widget>
				</div>
				<div style={{ border: 'solid 2px', flexGrow: 1, margin: '0.5rem', padding: '0.25rem' }}>
					<Widget name={'Leagues'} />
				</div>
			</div>
			<div style={{ width: '33%', height: '100%', display: 'flex', flexDirection: 'column' }}>
				<div style={{ border: 'solid 2px', flexGrow: 1, margin: '0.5rem', padding: '0.25rem' }}>
					<Widget name={'Past Games'} />
				</div>
				<div style={{ border: 'solid 2px', flexGrow: 1, margin: '0.5rem', padding: '0.25rem' }}>
					<Widget name={'Highlights'}/>
				</div>
			</div>
		</div>
	);
}

interface WidgetProps {
	name: string,
	children?: any
}

function Widget({ name, children }: WidgetProps) {
	return (
		<Fragment>
			<div style={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '0.5rem' }}>{name}</div>
			{children}
		</Fragment>
	);
}

interface LiveGameEntryProps {
	teamA: string,
	teamARecord: string,
	teamB: string,
	teamBRecord: string,
	time: string
}

function LiveGameEntry({ teamA, teamARecord, teamB, teamBRecord, time }: LiveGameEntryProps) {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: '0.5rem' }}>
			<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div>{teamA}</div>
					<div style={{ fontSize: '0.75rem', color: 'gray', marginLeft: '0.5rem' }}>{teamARecord}</div>
				</div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div>{teamB}</div>
					<div style={{ fontSize: '0.75rem', color: 'gray', marginLeft: '0.5rem' }}>{teamBRecord}</div>
				</div>
			</div>
			<div></div>
			<div style={{ verticalAlign: 'center' }}>{time}</div>
		</div>
	);
}
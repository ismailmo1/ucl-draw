const Fixtures = (props) => {
    return (
        <>
            <h2>Fixtures:</h2>
            <ul>
                {props.fixtures.map((fixture) => (
                    <li key={fixture.home.name}>
                        {fixture.home.name}(H) vs {fixture.away.name}(A)
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Fixtures;

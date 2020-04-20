import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Footer, Contributors, Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;

        return (
            <Router>
                <Header />
                <div className={styles.container}>
                    <Route exact path="/" render={ () => (
                        <React.Fragment>
                            <CountryPicker handleCountryChange={this.handleCountryChange} />
                            <Cards data={data} />    
                            <Chart data={data} country={country} /> 
                        </React.Fragment>
                    )}/>  
                </div>
                <Route path="/contributors" component={Contributors} /> 
                <Footer />
            </Router>
        )
    }
}

export default App;

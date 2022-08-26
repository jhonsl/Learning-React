import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import { getHeroesByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const { q = '' } = queryString.parse( location.search );
    const heroes = getHeroesByName(q);

    const showSearch = q.length === 0;
    const showError = !showSearch && heroes.length === 0;

    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`?q=${ searchText }`);
    };

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form onSubmit={ onSearchSubmit }>
                        <input 
                            autoComplete='off'
                            className='form-control'
                            name="searchText"  
                            placeholder='Search a hero'
                            type="text" 
                            onChange={ onInputChange }
                            value={ searchText }
                        />

                        <button 
                            className='btn btn-outline-primary mt-2'
                            type='submit'
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div 
                        style={{ display: showSearch ? '' : 'none' }}
                        className="alert alert-primary"
                    >
                        Search a hero
                    </div>

                    <div 
                        style={{ display: showError ? '' : 'none' }}
                        className="alert alert-danger">
                        
                        No hero with <b>{ q }</b>
                    </div>

                    {
                        heroes.map(hero => 
                            <HeroCard key={hero.id} {...hero}/> 
                        )
                    }
                </div>
            </div>
        </>
    )
}

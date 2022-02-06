import { CounterContextProvider } from './components/ErrorBoundryComponent/Context/CouterContext';
import Counter from './components/ErrorBoundryComponent/Counter';
// import ErrorBoundary from './components/ErrorBoundryComponent/ErrorBoundry';
import ErrorFallbackUi from './components/ErrorBoundryComponent/ErrorFallbackUi';
// import Toggle from './components/State Reducer Pattern/Toggle';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  const handleReset = () => {
    alert('Error state reseted');
  };

  return (
    <div className='App'>
      {/* <Toggle /> */}
      <div>welcome</div>
      {/* we can reset error boundry/ any component's state by passing a unique key prop along with it */}
      {/* Also if we pass key to a component then it will unmount itself and all it's children and then again remount it */}
      {/* The above solution works but is not optimal incase of error boundary component hence react-error-boundary component */}
      {/* passes "resetErrorBoundary" function prop along with error object prop*/}
      {/* Also provides  onReset event to which we can attach an event handler which fires when we reset error state*/}
      {/* react-error-boundary also provides "resetKeys" prop which is an array of values which when changed error boundary will
      reset itself resetKeys=[var1, var2]
      Proper Defination -> Luckily for us react-error-boundary supports this with the resetKeys prop. You pass an array of values to resetKeys and if the ErrorBoundary 
      is in an error state and any of those values change, it will reset the error boundary*/}
      <ErrorBoundary FallbackComponent={ErrorFallbackUi} onReset={handleReset}>
        <CounterContextProvider>
          <Counter />
        </CounterContextProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;

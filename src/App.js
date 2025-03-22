import logo from './logo.svg';
import './App.css';
import MyTest from './componant/MyTest';
import FunctionClick from './componant/FunctionClick';
import Form from './componant/Formdata';
import RefDemo from './componant/RefDemo';
import Hero from './componant/Hero';
import ErrorBoundary from './componant/ErrorBoundary';
import ClickCounterTwo from './componant/ClickCounterTwo';
import HoverCounterTwo from './componant/HoverCounterTwo';
import User from './componant/User';
import Counter from './componant/Counter';
import PostList from './componant/PostList';
import PostFrom from './componant/PostFrom';
import Hookscounter from './componant/Hookscounter';
import HooksCounterTwo from './componant/HooksCounterTwo';
import HookcouterFour from './componant/HookcouterFour';
import HookeEffetl from './componant/HookeEffetl';
import HooksJosnFetch from './componant/HooksJosnFetch';
import Memocounter from './componant/Memocounter';

function App() {
  return (
    <>
    
  <div>
    <>
    {/* <MyTest></MyTest>
    <FunctionClick></FunctionClick>
    <Form></Form>
    <RefDemo></RefDemo>

   <ErrorBoundary>
    <Hero heronames="Batman"></Hero>
    </ErrorBoundary>
    <ErrorBoundary>
   
    <Hero heronames="Superman"></Hero>
 
    </ErrorBoundary>
    <ErrorBoundary>
    <Hero heronames="joker"></Hero>
    </ErrorBoundary> */} 
    </>
    {/* <div>
      <ClickCounterTwo></ClickCounterTwo>
      <HoverCounterTwo></HoverCounterTwo>
      <User render={(isLoggedIn)=>isLoggedIn ? "Rajendra":"Guest"}></User>
    </div> */}

    {/* <div>
      <Counter render={(count,clickHander)=><ClickCounterTwo
       count={count} clickHander={clickHander}/>}></Counter>
    </div>

    <div>
      <Counter render={(count,clickHander)=><HoverCounterTwo
       count={count} clickHander={clickHander}/>}></Counter>
    </div> */}

    {/* <div>
    <PostList></PostList>
    </div> */}

    {/* <div>
      <PostFrom></PostFrom>
    </div> */}

    {/* <div>
      <Hookscounter></Hookscounter>
    </div> */}

    {/* <div>
      <HooksCounterTwo></HooksCounterTwo>
    </div> */}

    {/* <div>
      <HookcouterFour></HookcouterFour>
    </div> */}

    {/* <div>
       <HookeEffetl></HookeEffetl>
    </div> */}

    {/* <HooksJosnFetch></HooksJosnFetch> */}
    <div>
      <Memocounter></Memocounter>
    </div>
  </div>
    </>
    
  );
}

export default App;

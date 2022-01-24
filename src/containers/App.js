import React, { Fragment } from "react";
// import uuidv4 from "uuid/v4";
import { Route, Switch } from "react-router-dom";

import Todos from "../components/Task/Todos";
import AddNewTask from "../components/Task/AddNewTask";
import About from "../components/common/About";
import Naw from "./../components/common/Naw";

const App = () => {
    return (
        <Fragment>
            <Naw />
            <div className="d-flex justify-content-center container">
                <div className="col-md-8">
                    <div className="card-hover-shadow-2x mb-3 card">
                        <Switch>
                            <Route exact path="/" component={Todos} />
                            چون تابع About یک props ای داره میشود به جای
                            component از اتریبیوت render استفاده کنیم
                            <Route
                                path="/about"
                                render={() => (
                                    <About teachersName="امیر حسین ستاری" />
                                )}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
            <AddNewTask />
        </Fragment>
    );
};

export default App;

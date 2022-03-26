import React from 'react';

const QNA = () => {
    return (
        <div className='m-5 p-5 bg-light border border-2 border-dark'>
            <h1>Some General Questions and Answers</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            How React Works?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">React is a JavaScript-based library. React maintains a tree and it do efficient diff computation on the nodes. Browser treats a HTML code as a tree. It constructs DOM, which is an API to modify the nodes is it. React creates <code>Virtual DOM</code> that works much faster.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Difference between Props Vs State
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <code>Props</code><br />
                            Props are used to send data and event handlers to a component's children.
                            Props are immutable — they can't be modified after they've been set.
                            Both functional and class components can benefit from the use of props.
                            The parent component sets props for the children components.<br />
                            <br />
                            <code>State</code><br />
                            The data of the components that must be presented to it store the view in the state.
                            The data is stored in the state, which might change over time.
                            Only class components can use the state.
                            Event handlers are typically responsible for updating the state.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            How does useState work?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            The useState hook allows us declare one or more state variables in function components.The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QNA;
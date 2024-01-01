const Header = ({course}) => {
    console.log('header is working properly')

    return(
        <div>
            <h1>{course}</h1>
        </div>
    )
}

const Part = ({part, exercises}) => {
    
    return (
        <div>
            <p>
                {part} {exercises}
            </p>
        </div>
    )
}
const Content = ({part, exercises}) => {

    return(
        <div>
            <Part part={part[0]} exercises={exercises[0]}></Part>
            <Part part={part[1]} exercises={exercises[1]}></Part>
            <Part part={part[2]} exercises={exercises[2]}></Part>
        </div>
    )
}

const Total = ({exercises}) => {

    return (
        <div>
            <p>Number of exercises {exercises[0] + exercises[1] + exercises[2] }</p>
        </div>
    )
}

const App = () => {
    // const course = 'Half Stack application development'
    const part = ['Fundamentals of React', 'Using props tp pass data', 'State of a component']
    const exercises = [10, 7, 13]
    // const part1 = 'Fundamentals of React'
    // const exercises1 = 10
    // const part2 = 'Using props tp pass data'
    // const exercises2 = 7
    // const part3 = 'State of a component'
    // const exercises3 = 14

    return (
        <div>
            <Header course='Half Stack application development'></Header>
            <Content part= {part} exercises= {exercises}></Content>
            <Total exercises={exercises}></Total>
        </div>
    )
}

export default App
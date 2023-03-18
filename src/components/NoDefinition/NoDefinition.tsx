type AppProps = {
    searched: boolean;
}

function NoDefinition({ searched }: AppProps) {
    console.log(searched)
    if (searched) {
        return (
            <div>
                <p className='text-center text-[70px]'>&#128533;</p>
                <h4 className='text-center text-black dark:text-white py-4'>No definitions Found</h4>
                <p className='text-center text-gray-300'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at a later time or head to the web instead.</p>
            </div>
        )
    }
    return <></>;
}

export default NoDefinition;

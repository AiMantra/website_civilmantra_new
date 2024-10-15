import React, { useEffect, useState } from 'react';
import { APPLY_URL, API, MEDIA_URL } from '../../../src/axios';
import PositionsSkeleton from '../PositionsSkeleton';

// Define the type for a job
interface Job {
    id: string;
    position_name: string;
    department_name: string;
    location: string;
    job_type: string;
    experience: string;
    status: string; // Assuming status is also a part of the job object
}

const Position : React.FC = () => {
    const locationicon = `${MEDIA_URL}/Career/location.svg`;
    const timeicon = `${MEDIA_URL}/Career/time.svg`;
    const experienceicon = `${MEDIA_URL}/Career/experience.svg`;
    const keywordsicon = `${MEDIA_URL}/Career/keywords.svg`;
    const dividericon = `${MEDIA_URL}/Career/divider.svg`;
    
    const [allVacancy, setAllVacancy] = useState<Job[]>([]);
    const [filteredVacancy, setFilteredVacancy] = useState<Job[]>([]);
    const [industry, setIndustry] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [keyword, setKeyword] = useState<string>('');
    const [isloading, setIsLoading] = useState<boolean>(true);
    
    const [currentPage, setCurrentPage] = useState<number>(1);
    const jobsPerPage = 5;
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const totalPages = Math.ceil(filteredVacancy.length / jobsPerPage);
    const currentJobs = filteredVacancy.slice(indexOfFirstJob, indexOfLastJob);

    // Fetch vacancies on component mount
    useEffect(() => {
        const getVacancy = async () => {
            try {
                const res = await API.get(`/jd/jobpost/`);
                const activeVacancy: Job[] = res.data.filter((job: Job) => job.status === 'active');
                setAllVacancy(activeVacancy);
                setFilteredVacancy(activeVacancy);
            } catch (err) {
                console.log('Error Occurred! Please try again after a while.');
            }
            setIsLoading(false);
        };
        getVacancy();
    }, []);
    
    const filterVacancies = () => {
        const filtered = allVacancy.filter(job => {
            return (
                (industry === '' || job.department_name.toLowerCase().includes(industry.toLowerCase())) &&
                (location === '' || job.location.toLowerCase().includes(location.toLowerCase())) &&
                (keyword === '' || job.position_name.toLowerCase().includes(keyword.toLowerCase()))
            );
        });
        setFilteredVacancy(filtered);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            filterVacancies();
        }
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
    
    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
    
    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    className={`mx-[3px] page-number careerpage ${currentPage === i ? "careersactive" : ""}`}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className='w-full flex flex-col justify-center items-center  max-[1024px]:mt-0 mt-[15%] max-sm:mt-[20%] gap-20 max-sm:gap-14 max-sm:px-4 relative top-[-215px] mb-0'>
            <div className="max-sm:w-full flex py-3 px-6 cursor-pointer max-sm:shadow-[0_0_40px_1px_rgba(0,0,0,0.2)] shadow-[0_0_40px_1px_rgba(0,0,0,0.1)] rounded-xl">
                <div className="max-sm:w-full max-sm:flex-col max-sm:gap-10 max-sm:pb-4 flex gap-4">
                    <div className='flex gap-2'>
                        <img src={experienceicon} alt="Industry" className='w-6 max-sm:w-8' />
                        <input
                            type="text"
                            placeholder="Industry"
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="text-sm max-sm:text-lg max-sm:py-4 px-2 max-sm:w-full"
                        />
                    </div>
                    
                    <img src={dividericon} alt="Career" className='max-sm:hidden' />
                    <div className='flex gap-2'>
                        <img src={locationicon} alt="Location" className='w-6 max-sm:w-8' />
                        <input
                            type="text"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="text-sm max-sm:text-lg max-sm:py-4 px-2 max-sm:w-full"
                        />
                    </div>

                    <img src={dividericon} alt="Career" className='max-sm:hidden' />
                    <div className='flex gap-2'>
                        <img src={keywordsicon} alt="Keywords" className='w-5 max-sm:w-6 max-sm:ml-2' />
                        <input
                            type="text"
                            placeholder="Keyword"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="text-sm max-sm:text-lg max-sm:py-4 px-2 max-sm:w-full"
                        />
                    </div>
                    <button onClick={filterVacancies} className="px-8 py-4 bg-secondary text-sm text-white rounded-md">Search</button>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
                {isloading && <PositionsSkeleton cards={5}/>}
                {currentJobs.map((item) => (
                    <div className="vacancy-box max-sm:w-full w-[90%] relative flex my-6 max-sm:justify-start justify-between cursor-pointer bg-[rgba(245,245,245,0.4)] px-10 py-10 border-[1px] border-[#e0e1e9] rounded-lg" key={item.id}>
                        <div className="w-[50%] max-[1024px]:w-[75%] flex flex-col items-start justify-center max-sm:gap-4 max-sm:p-2">
                            <div className="w-full max-sm:flex-col flex items-center gap-10 max-sm:gap-4">
                                <div className="position-title text-3xl font-semibold">{item.position_name}</div>
                                <div className="max-[1024px]:w-[25%] w-[20%] text-sm py-1 rounded-full uppercase text-center bg-[#EFF0F6]">{"Job ID: "+item.id.slice(0, 5)}</div>
                            </div>
                            <div className="pt-2 darkgray">{item.department_name}</div>
                            <div className="w-[70%] pt-6 max-[1024px]:w-[80%] max-sm:flex-wrap flex items-center gap-10 max-sm:gap-6">
                                <div className="flex items-center justify-center gap-2">
                                    <img src={locationicon} alt="Location" />
                                    <div>{item.location}</div>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <img src={timeicon} alt="Job Type" />
                                    <div>{item.job_type}</div>
                                </div>
                                <div className="flex max-[1024px]:w-[30%] justify-center items-center gap-2">
                                    <img src={experienceicon} alt="Experience" />
                                    <div>{item.experience}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center max-sm:justify-start max-sm:mt-2 max-sm:p-2 max-sm:pb-6">
                            <a href={`${APPLY_URL}/${item.id}`}>
                                <button className="apply-btn  px-14 py-4  rounded-md border-0 bg-[#EFF0F6]">Apply now</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="careerspagination pagination">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="page-arrow mr-4"
                >
                    &lt;
                </button>
                {renderPageNumbers()}
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="page-arrow ml-4"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Position;

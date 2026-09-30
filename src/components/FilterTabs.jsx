import { useState } from "react"
import { BsZoomIn, BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router-dom";

import PortfolioImg1 from '../assets/portfolio-1.webp'
import PortfolioImg2 from '../assets/portfolio-2.webp'
import PortfolioImg3 from '../assets/portfolio-3.webp'
import PortfolioImg4 from '../assets/portfolio-4.webp'
import PortfolioImg5 from '../assets/portfolio-5.webp'
import PortfolioImg6 from '../assets/portfolio-6.webp'
import PortfolioImg7 from '../assets/portfolio-7.webp'
import PortfolioImg8 from '../assets/portfolio-8.webp'
import PortfolioImg9 from '../assets/portfolio-9.webp'
import PortfolioImg10 from '../assets/portfolio-10.webp'


//Define your project data with categories and other relevant information
const projectsData = [
    { id: 1, title: 'Ecommerce Website', category: 'Web', image: PortfolioImg1 },
    { id: 2, title: 'Mobile App', category: 'Mobile', image: PortfolioImg2 },
    { id: 3, title: 'Branding Project', category: 'Design', image: PortfolioImg3 },
    { id: 4, title: 'Portfolio Website', category: 'Web', image: PortfolioImg4 },
    { id: 5, title: 'Social Media Campaign', category: 'Marketing', image: PortfolioImg5 },
    { id: 6, title: 'Photography Project', category: 'Photography', image: PortfolioImg6 },
    { id: 7, title: 'UI/UX Design', category: 'Design', image: PortfolioImg7 },
    { id: 8, title: 'Mobile Game', category: 'Mobile', image: PortfolioImg8 },
    { id: 9, title: 'Digital Marketing Strategy', category: 'Marketing', image: PortfolioImg9 },
    { id: 10, title: 'Product Photography', category: 'Photography', image: PortfolioImg10 },
]

// Define your categories for filtering
const CATEGORIES = ['All', 'Web', 'Mobile', 'Design', 'Marketing', 'Photography']

export default function FilterTabs() {
    //State to manege the active filter category
    const [activeFilter, setActiveFilter] = useState('All')
    //Filter the Projects based in the active category
    const filteredProjects = activeFilter === 'All' ? projectsData : projectsData.filter(project => project.category === activeFilter)
    return (
        <>
            <section className="filterTabs">

                {/* Filter Buttons Navigation */}
                <div className="portfolio-tabs">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`tabs-btn px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === category
                                ? 'active-tab-btn'
                                : 'hover-bg'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid Display */}
                <div className="row">
                    <div className="tabs-projects">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="img-card-box col-lg-3 col-md-4 col-sm-3 shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full object-cover"
                                />
                                <div className="project-hover-effect">
                                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                                        {project.title}
                                    </h3>
                                    <div className="project-icons">
                                        <Link to='' className="text-blue-600 hover:underline mt-2 inline-block">
                                            <i className="bi bi-zoom-in"><BsZoomIn /></i>
                                        </Link>
                                        <Link to='' className="text-blue-600 hover:underline mt-2 inline-block ml-4">
                                            <i className="bi bi-link-45deg"><BsLink45Deg /></i>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
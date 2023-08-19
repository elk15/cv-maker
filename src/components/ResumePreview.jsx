import '../styles/ResumePreview.css';
import Icon from '@mdi/react';
import { mdiEmailFastOutline } from '@mdi/js';
import { mdiPhoneInTalkOutline } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';
import { mdiLinkVariant } from '@mdi/js';

function SectionItem({title, subtitle, startYear, endYear=''}) {
    return (
        <li>
            <div>
                <span className='dates'>{startYear} - {endYear}</span>
            </div>
            <div>
                <span>{title}</span>
                <p>{subtitle}</p>
            </div>
        </li>
    )

}

function SectionItemWithLink({title, url, description = '', color}) {
    return (
        <li>
            <div>
                <span><a href={url} target="_blank">
                    <Icon path={mdiLinkVariant} size={1} color={color}/>
                    {title}
                    </a></span>
                <p>{description}</p>
            </div>
        </li>
    )
}

function SkillItem({item}) {
    return (
        <div className='skill-label'>
            {item}
        </div>
    )
}

function SkillSet({title, items}) {

    return (
        <li>
            <span>{title}</span>
            <div className="skill-labels">
                {items.map((item) => <SkillItem key={item} item={item}/>)}
            </div>
        </li>
    )
}

function ResumePreview({person}) {
    return (
        <>
            <div className="col-1">
                <div>
                    <h3>PERSONAL INFO</h3>
                    <hr/>
                    <div id='preview-personal' className='preview-section'>
                        {person.email !== '' && <p id='preview-email'><Icon path={mdiEmailFastOutline} size={1} color="white"/> {person.email}</p>}
                        {person.phone !== '' && <p id='preview-phone'><Icon path={mdiPhoneInTalkOutline} size={1} color="white"/> {person.phone}</p>}
                        {person.location !== '' && <p id='preview-location'><Icon path={mdiMapMarker} size={1} color="white"/> {person.location}</p>}
                        {person.website !== '' && <a href={person.website} target="_blank"><Icon path={mdiLinkVariant} size={1} color="white"/>Personal website</a>}
                        {person.portfolio !== '' && <a href={person.portfolio} target="_blank"><Icon path={mdiLinkVariant} size={1} color="white"/>Portfolio</a>}
                    </div>
                </div>
                {person.skills.length > 0 &&
                <div>
                    <h3>SKILLS</h3>
                    <hr/>
                    <ul>
                        {person.skills.map((item) => <SkillSet 
                        key={item.id} 
                        title={item.title} 
                        items={item.items}/>)}
                    </ul>
                </div>
                }
                {person.certificates.length > 0 && 
                    <div>
                        <h3>CERTIFICATES</h3>
                        <hr/>
                        <ul>
                        {person.certificates.map((item) => <SectionItemWithLink
                            key={item.id}
                            title={item.title}
                            url={item.url}
                            color={'white'}
                            />)}
                        </ul>
                    </div>
                }
                <div>
                    <h3>SOCIALS</h3>
                    <hr/>
                </div>
            </div>
            <div className="col-2">
                <div>
                    <h1 id='preview-name'>{person.firstName.toUpperCase()}<span>{person.lastName.toUpperCase()}</span></h1>
                    <h2 id='preview-role'>{person.role}</h2>
                </div>
                {person.education.length > 0 &&
                <div>
                    <h3>EDUCATION</h3>
                    <hr/>
                    <ul>
                        {person.education.map((item) => <SectionItem 
                            key={item.id}
                            title={item.degree} 
                            subtitle={item.university}
                            startYear={item.startYear}
                            endYear={item.endYear}/>)}
                    </ul>
                </div>
                }
                {person.work.length > 0 &&
                <div>
                    <h3>WORK EXPERIENCE</h3>
                    <hr/>
                    <ul>
                        {person.work.map((item) => <SectionItem
                            key={item.id}
                            title={item.title}
                            subtitle={item.employer}
                            startYear={item.startYear}
                            endYear={item.endYear}/>)}
                    </ul>
                </div>
                }
                {person.projects.length > 0 &&
                <div>
                    <h3>PROJECTS</h3>
                    <hr/>
                    <ul>
                        {person.projects.map((item) => <SectionItemWithLink
                            key={item.id}
                            title={item.title}
                            url={item.url}
                            description={item.description}
                            color={'black'}
                            />)}
                    </ul>
                </div>
                }
                
            </div>
        </>
    )
}

export default ResumePreview
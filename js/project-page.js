/*
========================================
GET PROJECT
========================================
*/

const params = new URLSearchParams(window.location.search);

const projectId = params.get("project");

const project = projects.find(project => {
    return project.id === projectId;
});


/*
========================================
CHECK PROJECT
========================================
*/

const projectPage = document.getElementById("project-page");

if (!project) {

    projectPage.innerHTML = `
        <section class="project-not-found">

            <h1>Project not found</h1>

            <p>
                The requested project does not exist.
            </p>

            <a href="index.html">
                Back to home
            </a>

        </section>
    `;

    throw new Error("Project not found: " + projectId);
}


/*
========================================
PAGE TITLE
========================================
*/

document.title = `${project.title} | Corentin REMOT`;


/*
========================================
DESCRIPTION
========================================
*/

const descriptionHTML = (project.description || [])
    .map(paragraph => {

        return `
            <p>
                ${paragraph}
            </p>
        `;

    })
    .join("");


/*
========================================
CONTRIBUTION
========================================
*/

const contributionHTML = (project.contribution || [])
    .map(paragraph => {

        return `
            <p>
                ${paragraph}
            </p>
        `;

    })
    .join("");


/*
========================================
GAMEPLAY VIDEOS
========================================
*/

const videosHTML = (project.gameplayVideos || [])
    .map(video => {

        /* --------------------------------
        YOUTUBE
        -------------------------------- */

        if (video.type === "youtube") {

            let videoClass = "video-landscape";

            if (video.ratio === "9 / 16") {
                videoClass = "video-portrait";
            }

            else if (video.ratio === "1 / 1") {
                videoClass = "video-square";
            }

            return `
                <iframe
                    class="${videoClass}"
                    src="${video.url}"
                    title="${project.title} gameplay"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            `;
        }


        /* --------------------------------
        LOCAL VIDEO
        -------------------------------- */

        if (video.type === "local") {

            let videoClass = "video-landscape";

            if (video.ratio === "9 / 16") {
                videoClass = "video-portrait";
            }

            else if (video.ratio === "1 / 1") {
                videoClass = "video-square";
            }

            return `
                <video
                    class="${videoClass}"
                    src="${video.url}"
                    controls
                    muted
                    loop
                    playsinline
                ></video>
            `;
        }
            return "";

        }).join("");



/*
========================================
FEATURES
========================================
*/

const featuresHTML = (project.features || [])
    .map((feature, index) => {

        /*
        Every second feature is reversed.

        0 → image | text
        1 → text | image
        2 → image | text
        3 → text | image
        */

        const reverseClass = index % 2 !== 0
            ? "feature-reverse"
            : "";


        /*
        FEATURE DESCRIPTION
        */

        const featureDescriptionHTML = (feature.description || [])
            .map(paragraph => {

                return `
                    <p>
                        ${paragraph}
                    </p>
                `;

            })
            .join("");


        /*
        FEATURE HTML
        */

        return `
            <article class="project-feature ${reverseClass}">

                <div class="feature-media">

                    <img
                        src="${feature.media}"
                        alt="${feature.title}"
                        loading="lazy"
                    >

                </div>


                <div class="feature-content">

                    <h2>
                        ${feature.title}
                    </h2>

                    ${featureDescriptionHTML}

                </div>

            </article>
        `;

    })
    .join("");


/*
========================================
BUILD PAGE
========================================
*/

projectPage.innerHTML = `

    <!-- =================================
         PROJECT HEADER
    ================================== -->

    <section class="project-header">

    <div
        class="project-header-bg"
        style="background-image: url('${project.background || project.image}');"
    ></div>

    <div class="project-header-overlay">

        <h1>
            ${project.title}
        </h1>

        <p class="project-details">
            ${project.details}
        </p>

        <p class="project-details">
            ${project.feature}
        </p>

    </div>

</section>


    <!-- =================================
         GAMEPLAY VIDEOS
    ================================== -->

    ${
        videosHTML
        ? `
            <section class="project-videos">
                ${videosHTML}
            </section>
        `
        : ""
    }


    <!-- =================================
         DESCRIPTION
    ================================== -->

    <section class="project-description">

        <div class="project-logo">

            <img
                src="${project.logo}"
                alt="${project.title} logo"
                loading="lazy"
            >

        </div>


        <div class="project-description-text">

            ${descriptionHTML}

        </div>

    </section>


    <!-- =================================
         ITCH BUTTON
    ================================== -->

    ${
        project.steam
        ? `
            <section class="project-link">

                <a
                    href="${project.steam}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="steam-button"
                >
                    Play on Steam !
                </a>

            </section>
        `
        : ""
    }
    
    ${
        project.itch
        ? `
            <section class="project-link">

                <a
                    href="${project.itch}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="itch-button"
                >
                    Play on itch.io !
                </a>

            </section>
        `
        : ""
    }
    

    <!-- =================================
         CONTRIBUTION
    ================================== -->

    ${
        contributionHTML
        ? `
            <section class="project-contribution">

                <h2>
                    My Contribution
                </h2>

                ${contributionHTML}

            </section>
        `
        : ""
    }


    <!-- =================================
         FEATURES
    ================================== -->

    ${
        featuresHTML
        ? `
            <section class="project-features">

                ${featuresHTML}

            </section>
        `
        : ""
    }

`;
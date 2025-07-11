import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <h2>About Me</h2>
      <p>
        Hello! I am Haribabu B, a passionate Full-Stack Developer currently pursuing my MCA at Pondicherry University.
        I specialize in Python, Django, React, and building REST APIs.
      </p>
      <p>
        I live in Puducherry, a beautiful city known for its rich culture and serene environment.
      </p>

      <h3>My Education</h3>
      <table>
        <thead>
          <tr>
            <th>Degree / Level</th>
            <th>Institution</th>
            <th>Location</th>
            <th>Duration</th>
            <th>Result</th>
            <th>Percentage / CGPA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Degree / Level">MCA</td>
            <td data-label="Institution">
              Pope John Paul II College of Education<br />
              (Pondicherry University)
            </td>
            <td data-label="Location">
              <a
                href="https://www.google.com/maps/dir//Reddiarpalayam,+Puducherry,+605009/@11.9308806,79.7108865,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a5361581815753d:0x8db5bd98581ca463!2m2!1d79.7932884!2d11.9308926?entry=ttu&g_ep=EgoyMDI1MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reddiarpalayam, Villianur Road, Puducherry - 605010
              </a>
            </td>
            <td data-label="Duration">Oct 2023 – Jun 2025</td>
            <td data-label="Result">-</td>
            <td data-label="Percentage / CGPA">7.70 / 10</td>
          </tr>

          <tr>
            <td data-label="Degree / Level">Bachelor of Computer Applications</td>
            <td data-label="Institution">
              Sri Aravindar Arts and Science College<br />
              (Thiruvalluvar University)
            </td>
            <td data-label="Location">
              <a
                href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqEggBEC4YQxivARjHARiABBiKBTIPCAAQABhDGOMCGIAEGIoFMhIIARAuGEMYrwEYxwEYgAQYigUyDQgCEC4YrwEYxwEYgAQyDQgDEC4YrwEYxwEYgAQyBwgEEAAYgAQyDQgFEC4YrwEYxwEYgAQyDAgGEC4YFBiHAhiABDINCAcQLhivARjHARiABDINCAgQLhivARjHARiABDIGCAkQLhhA0gEJMzk5M2owajE1qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KSu3bzZsZ1M6MZc5b98IWJhF&daddr=GST+Road,+Sedarapet,+Puducherry+605109"
                target="_blank"
                rel="noopener noreferrer"
              >
                GST Road, Sedarapet, Puducherry - 605109
              </a>
            </td>
            <td data-label="Duration">2020 - 2023</td>
            <td data-label="Result">7.67 / 10</td>
            <td data-label="Percentage / CGPA">72.865%</td>
          </tr>

          <tr>
            <td data-label="Degree / Level">HSLC</td>
            <td data-label="Institution">
              Seventh Day Adventist Higher Secondary School
            </td>
            <td data-label="Location">
              <a
                href="https://www.google.com/maps?s=web&sca_esv=5a4b1ba8a892269d&lqi=ChZzZGEgc2Nob29sIHBvbmRpY2hlcnJ5WhgiFnNkYSBzY2hvb2wgcG9uZGljaGVycnmSARBzZWNvbmRhcnlfc2Nob29sqgFZCggvbS8wNnpkahABKg4iCnNkYSBzY2hvb2woADIfEAEiG4cUWgVvyQAIQwKyDtzEhKfqDnKuQy96ZvLXgzIaEAIiFnNkYSBzY2hvb2wgcG9uZGljaGVycnk&vet=12ahUKEwjSvu20iLWOAxXhkq8BHdljFd8Q1YkKegQIHxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KY3g1g8AYVM6MSiHvx8vYpnR&daddr=Mothilal+Nagar,+Shanmugapuram,+Puducherry,+605009"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mothilal Nagar, Shanmugapuram, Puducherry - 605009
              </a>
            </td>
            <td data-label="Duration">2019 - 2020</td>
            <td data-label="Result">455 / 600</td>
            <td data-label="Percentage / CGPA">75.83%</td>
          </tr>

          <tr>
            <td data-label="Degree / Level">SSLC</td>
            <td data-label="Institution">
              Seventh Day Adventist Higher Secondary School
            </td>
            <td data-label="Location">
              <a
                href="https://www.google.com/maps?s=web&sca_esv=5a4b1ba8a892269d&lqi=ChZzZGEgc2Nob29sIHBvbmRpY2hlcnJ5WhgiFnNkYSBzY2hvb2wgcG9uZGljaGVycnmSARBzZWNvbmRhcnlfc2Nob29sqgFZCggvbS8wNnpkahABKg4iCnNkYSBzY2hvb2woADIfEAEiG4cUWgVvyQAIQwKyDtzEhKfqDnKuQy96ZvLXgzIaEAIiFnNkYSBzY2hvb2wgcG9uZGljaGVycnk&vet=12ahUKEwjSvu20iLWOAxXhkq8BHdljFd8Q1YkKegQIHxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KY3g1g8AYVM6MSiHvx8vYpnR&daddr=Mothilal+Nagar,+Shanmugapuram,+Puducherry,+605009"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mothilal Nagar, Shanmugapuram, Puducherry - 605009
              </a>
            </td>
            <td data-label="Duration">2017 - 2018</td>
            <td data-label="Result">362 / 500</td>
            <td data-label="Percentage / CGPA">72.4%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default About;

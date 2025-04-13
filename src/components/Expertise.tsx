import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "MySQL 5.x",
    "MySQL 8.0.x",
    "MySQL 8.4.x",
    "Kafka",
    "GCP",
    "MariaDB 10.1",
    "PostgreSQL",
    "SQL Server",
    "Oracle 11g",
    "MongoDB Atlas",
    "MongoDB Community",
    "ScyllaDB",
    "Aerospike",
    "On-premise",
    "Aliyun",
    "AWS",
    "Patroni",
    "Repmgr",
    "Vitess",
    "Percona-Toolkit",
    "Dataguard",
    "Debezium",
    "Proxysql",
];

const labelsSecond = [
    "Git",
    "Gitlab",
    "Docker",
    "Docker-compose",
    "Linux",
    "Hashicorp Vault",
    "Runatlantis",
    "Pagerduty",
    "Opsginie",
    "PMM",
    "Datadog",
    "Grafana",
    "Vividcortex (DPM)",
    "ELK",
    "Kubernetes",
    "Mesos",
    "Docker",
    "Docker-Compose",
    "Custom Alert & Monitoring"
];

const labelsThird = [
    "Python",
    "Terraform",
    "Ansible",
    "Bash",
    "Batch",
    "Jira",
    "JSM",
    "Metabase",
    "Redash",
    "Confluence",
    "Gemini",
    "Slack",
    "GChat",
    "FastAPI",
    "Flask"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>RDBMS & NoSQL</h3>
                    <p>I have installed, configured, and managed multiple database engines in both on-premise and cloud environment (HA, DRP, Replication, Sharding, Backup and Restore).
                    Performed security management (Vulnerability Assessment, Access Controls, Encryption, and Industry Standard Compliance).
                    Support engineering team (Capacity Planning, Performance Tunning, and Database Design).
                    I have a strong proficiency in the SDLC process and project management.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Developed and maintain inhouse automation scripts and tools for database management tasks, including backups, monitoring, provisioning, hardening, and deployment automation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Self-Service Database Platform</h3>
                    <p>Developed a database platform and database discovery service to automate database operations and improve system administration
                    and operational efficiency.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;

import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sep.2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Database Administrator II</h3>
            <h4 className="vertical-timeline-element-subtitle">Bank Aladin Syariah Tbk • Jakarta, ID</h4>
            <p>
              Manage over 100+ databases as a solo DBA.
              I provide a full range of services, including major and minor database upgrades, create database
              standardization, continuously strengthening databases to comply with banking regulations, ISO 27001, and
              Industry standards. Developed DBA tools, platforms, and automation while offering insight, consultation, performance tuning,
              and database design optimization for the engineering team. <br /><br />

              Tech Stack : GCP, On-premise, MySQL, PostgreSQL, MSSQL, Oracle, InfluxDB, Hashicorp Vault, Datadog, Grafana, Loki, Prometheus, Opsginie, Gitlab, Python, Bash, Batch, Docker, Docker-Compose, Redash, Metabase, Looker, Jira, JSM, Confluence.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="3 Years 9 Months • Jan.2019 - Sep.2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Database Administrator I</h3>
            <h4 className="vertical-timeline-element-subtitle">PT. Visionet Internasional (OVO) - GRAB • Jakarta, ID</h4>
            <p>
              Manage over 190+ RDBMS and NoSQL databases in on-premise and multi-cloud environments, including migrating more than 16 TB of data
              from on-premise to cloud in a microservices architecture. <br /><br />

              Tech Stack : GCP, Aliyun, AWS, On-premise, MySQL, PostgreSQL, MariaDB, MongoDB (Community, Atlas), ArangoDB, Datadog, Vividcortex(DPM), PMM, Pagerduty, Gitlab, Bitbucket, Jenkins, Runatlantis, Terraform, Ansible, Rundeck, Python, Bash, Docker, Redash, Jira, Confluence.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul.2012 – Jan.2019 • 6 Years 8 Months"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Database Developer & Solution Architect</h3>
            <h4 className="vertical-timeline-element-subtitle">SML Technologies • Jakarta, ID</h4>
            <p>
              Developed various system designs and architectures for data ingestion in various industries in Indonesia, ranging from telecommunications, energy, to agriculture, to be processed in data analysis systems within the big data ecosystem.
              <br /><br />
              Tech Stack : On-premise, MySQL, Oracle 11g, MSSQL, Cloudera Hadoop, Hbase, Spark, SNMP, PRTG, Sencha, Java, Batch, Mesos, Docker, IoT, SMSN.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1 year 1 Month • Jul.2011 – Jul.2012"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Operation Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">SML Technologies • Jakarta, ID</h4>
            <p>
              Maintain Telkomsel and Indosat infrastructure health check through performance management tools
              <br /><br />
              Tech Stack : On-premise, MySQL, Oracle 11g, MSSQL, Pentaho, Sencha, Java.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

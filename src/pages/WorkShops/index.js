import React from 'react'
import Default from '../../layouts/Default'
import { Link } from 'react-router'
import Section from './Section'
import styles from './WorkShops.css'

export default class WorkShopPage extends React.Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <Default className={styles.enterprise} {...this.props} fullWidth >
        <div className={styles.hero}>
          <div className={styles.boundMedium}>
            <h1 className={styles.heroTitle}>Upcoming Serverless Workshops</h1>
            <p className={`${styles.heroDescription}`}>
              Serverless Developer Workshops are a full day focused on providing training and guidance for serverless development, testing, security and operations. These workshops are most valuable  for developers  and technology leaders who are aiming to operationalize serverless across their organization. Join a waitlist below.
            </p>

            <p className={`${styles.heroDescription} ${styles.center}`}>
              Priced at $1095 per person. For private workshops please email workshops@serverless.com
            </p>
          </div>
        </div>
        <div>
          <div className={styles.cityLinks}>
            <Link to='/workshops/sanfrancisco'>
              San Francisco
            </Link>
            <Link to='/workshops/seattle'>
              Seattle
            </Link>
            <Link to='/workshops/new-york'>
              New York City
            </Link>
            <Link to='/workshops/atlanta'>
              Atlanta
            </Link>
            <Link to='/workshops/london'>
              London
            </Link>
          </div>
          <Section />
          <Section />
          <Section />
        </div>
        <Section />
      </Default>
    )
  }
}

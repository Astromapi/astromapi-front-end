import React, { Component } from 'react';
import { fetchEntry, updateEntry, deleteEntry } from './fetch-utils.js';
export default class JournalDetail extends Component {

    state = {
        journalEntry: [],
    }

    componentDidMount = async () => {
        const id = this.props.match.params.entryId;
        const entry = await fetchEntry(id, this.props.token)
        this.setState({ journalEntry: entry, formEntry: entry[0].journal_entry })
    }

    handleChange = (e) => {
        this.setState({ formEntry: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { englishname, date, image_url} = this.state.journalEntry[0];

        await updateEntry(
            this.props.match.params.entryId, 
            {
                journal_entry: this.state.formEntry,
                englishname,
                date,
                image_url,
            },
            this.props.token
            )

        this.props.history.push('/journal')
    }

    handleDelete = async () => {
        deleteEntry(this.props.match.params.entryId, this.props.token);
        await this.props.history.push('/journal')
    }

    render() {
        const firstEntry = this.state.journalEntry[0];

        return (
            <div className="main">
                <h1>Edit Journal</h1>
                <div className='journal-detail'>
                        {
                            this.state.journalEntry.length &&
                            <h2>
                                {firstEntry.englishname}
                            </h2>
                        }
                    <div className='journal-detail-body'>
                        <section>
                            {
                                this.state.journalEntry.length > 0 && <img src={firstEntry.image_url} alt="astro" />
                            }
                            {
                                this.state.journalEntry.length > 0 && <h4>{firstEntry.date}</h4>
                            }
                        </section>
                        <article>
                            <form onSubmit={this.handleSubmit}>
                            {
                                this.state.journalEntry.length > 0 && <textarea onChange={this.handleChange} value={this.state.formEntry}></textarea>
                            }
                            <div className='journal-edit-buttons'>
                                <button>Save</button>
                                <button onClick={this.handleDelete}>Delete</button>
                            </div>
                            </form>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}

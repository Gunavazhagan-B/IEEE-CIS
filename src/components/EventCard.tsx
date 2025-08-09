type EventCardProps = {
    event: EventType;
    showDeleteButton: boolean;
    onDelete: (id: number) => void;
};

type EventType = {
	id: number;
	title: string;
	description: string;
	image: string;
	link: string;
};

const EventCard = ({ event, showDeleteButton, onDelete }: EventCardProps) => (
    <div className="event-card">
        <img
            src={event.image}
            alt={event.title}
            className="event-image"
        />
        <div className="event-content">
            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <div className="event-actions">
                <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="register-btn"
                >
                    Register
                </a>
                {showDeleteButton && (
                    <button
                        className="delete-btn"
                        onClick={() => onDelete(event.id)}
                    >
                        Delete
                    </button>
                )}
            </div>
        </div>
    </div>
);

export default EventCard;
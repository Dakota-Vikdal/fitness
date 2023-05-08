from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from datetime import timedelta
from sqlalchemy import MetaData


app = Flask( __name__ )

app.config[ 'SQLALCHEMY_DATABASE_URI' ] = 'sqlite:///fitness.db'
app.config[ 'SQLALCHEMY_TRACK_MODIFICATIONS' ] = False
app.json.compact = False
app.permanent_session_lifetime = timedelta(days=30)

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
db = SQLAlchemy(metadata=metadata)


db = SQLAlchemy()

migrate = Migrate( app, db )

db.init_app( app )

bcrypt = Bcrypt( app )

CORS(app)

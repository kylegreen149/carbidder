from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
# from flask_bcrypt import Bcrypt
# from sqlalchemy.ext.hybrid import hybrid_property

# naming convention for db constraints (fixes an alembic bug)
convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

# init sqlalchemy object
db = SQLAlchemy(metadata=MetaData(naming_convention=convention))

class Car(db.Model, SerializerMixin):
    __tablename__ = "cars"

    id = db.Column(db.Integer, primary_key=True)
    display_image = db.Column(db.String)
    color = db.Column(db.String)
    year = db.Column(db.Integer)
    brand = db.Column(db.String)
    model = db.Column(db.String)
    body_style = db.Column(db.String)
    type = db.Column(db.String)
    transmission = db.Column(db.String)
    mileage = db.Column(db.Integer)
    top_speed = db.Column(db.Integer)
    accident_history = db.Column(db.String)
    current_condition = db.Column(db.String)
    modifications = db.Column(db.String)
    car_report = db.Column(db.String)
    bids = db.Column(db.Integer)
    starting_bid_price = db.Column(db.Integer)
    current_bid_price = db.Column(db.Integer)

    def __repr__(self):
        return f'''<Car {self.id}, {self.display_image}, {self.color}, 
        {self.year}, {self.brand}, {self.model}, {self.body_style}, {self.type}, {self.transmission}, {self.mileage}, 
        {self.top_speed}, {self.accident_history}, {self.current_condition}, {self.modifications}, {self.car_report}, 
        {self.bids}, {self.starting_bid_price}, {self.current_bid_price}>'''
    
class Bids(db.Model, SerializerMixin):
    __tablename__ = "bids"
    
    id = db.Column(db.Integer, primary_key=True)
    car_id = db.Column(db.Integer, db.ForeignKey("cars.id"))
from flask import Flask, request, make_response, jsonify, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from sqlalchemy.exc import IntegrityError
import datetime
from config import app, api
from models import db, Seed


class Seeds(Resource):
    def get(self):
        seeds = [s.to_dict() for s in Seed.query.all()]
        return make_response(seeds, 200)


api.add_resource(Seeds, '/seeds')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

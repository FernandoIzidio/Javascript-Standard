import faker, json, random, pathlib

fk = faker.Faker("en_US")
currentdir = pathlib.Path(__file__).parent

def getGender():
    choice = random.choice(['M', 'F'])
    if choice == "M":
        return {"name": fk.name_male(), "gender": "Male"}
    return {"name": fk.name_female(), "gender": "Female"}

dados =[ {
    **getGender(),
    "age": fk.random.randint(18, 60), 
    "address": fk.address(),
} for num in range(100)]

with open(currentdir / "data.json", "w", encoding="utf-8") as jsonfile:
    json.dump(dados, jsonfile, ensure_ascii=False, indent=2)
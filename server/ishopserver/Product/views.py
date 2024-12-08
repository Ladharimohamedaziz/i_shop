from django.http import HttpResponse
from .AddProducts import Addp

def index(request):
    result=Addp()
    return HttpResponse(f"{result}")



# AddProducts.py
from ffi.js import document


# Main

def main():
    """
    * Render text in root element
    """
    element = document.getElementById("root")
    element.innerHTML = "Hello World"

